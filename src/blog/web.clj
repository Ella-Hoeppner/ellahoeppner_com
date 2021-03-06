(ns blog.web
  (:require [optimus.assets :as assets]
            [optimus.link :as link]
            [optimus.optimizations :as optimizations]
            [optimus.prime :as optimus]
            [optimus.strategies :as strategies]
            [clojure.string :as string]
            [clj-rss.core :as rss]
            [hiccup.page :refer [html5]]
            [me.raynes.cegdown :as md]
            [stasis.core :as stasis]
            [clj-yaml.core :as yaml]
            [clojure.java.io :as io]))

(def site-url "http://ellahoeppner.com/")

(def output-dir "output/")

(defn date-string [date]
  (let [[year month day] (string/split date #"-")]
    (str (["January"
           "Febuary"
           "March"
           "April"
           "May"
           "June"
           "July"
           "August"
           "September"
           "October"
           "November"
           "December"] (dec (Integer/parseInt month)))
         " "
         day
         ", "
         year)))

(defn layout-page [request header & content]
  (html5
   [:head
    [:meta {:charset "utf-8"}]
    [:meta {:name "viewport"
            :content "width=device-width, initial-scale=1.0"}]
    [:title "Ella Hoeppner"]
    [:link {:rel "stylesheet" :href "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}]
    [:link {:rel "stylesheet" :href (link/file-path request "/styles/pure-min.css")}]
    [:link {:rel "stylesheet" :href (link/file-path request "/styles/all.css")}]]
   [:body
    [:div#layout
     [:a#menuLink.menu-link {:href "#menu"}
      [:span]]
     [:div#menu
      [:div.pure-menu
       [:a.pure-menu-heading {:href "/"} "Ella Hoeppner"]
       [:ul.pure-menu-list
        [:li.pure-menu-item [:a.pure-menu-link {:href "/"} "Home"]]
        [:li.pure-menu-item [:a.pure-menu-link {:href "/blog/"} "All Posts"]]
        [:li.pure-menu-item [:a.pure-menu-link {:href "/tags/"} "Tags"]]
        [:li.pure-menu-item [:a.pure-menu-link {:href "/blog.rss"} "RSS"]]]
       [:a {:href "https://twitter.com/ella_hoeppner" :style "position:fixed; bottom: 10px"}
        "<svg height=\"30\" width=\"30\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path style=\"fill:#F9F5D4;\" d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"/></svg>"]
       [:a {:href "https://instagram.com/hopenager" :style "position:fixed; bottom: 10px; margin-left: 40px"}
        "<svg height=\"30\" width=\"30\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path style=\"fill:#F9F5D4;\" d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"/></svg>"]]]
     (conj [:div#main]
           [:div.header header]
           [:div.content content])
     [:script {:type "text/javascript" :src (link/file-path request "/js/ui.js")}]]]))

(defn blog-posts []
  (sort-by (fn [post]
             (let [date (:date post)
                   [year month day] (mapv #(Integer/parseInt %) (string/split date #"-"))]
               (* -1
                  (+ (* 10000 year)
                     (* 100 month)
                     day))))
           (mapv (fn [[filename content]]
                   (let [split-content (string/split content #"---\r\n|---\n")
                         data (yaml/parse-string (second split-content))]
                     {:slug (string/replace filename #"/|.md" "")
                      :content (last split-content)
                      :title (:title data)
                      :date (:date data)
                      :tags (:tags data)}))
                 (stasis/slurp-resources "blog" #"\.md$"))))

(defn all-tags []
  (loop [tags []
         posts (blog-posts)]
    (if (empty? posts)
      tags
      (recur (loop [merged-tags tags
                    new-tags (:tags (first posts))]
               (if (empty? new-tags)
                 merged-tags
                 (let [new-tag (first new-tags)]
                   (recur (if (some #{new-tag} merged-tags)
                            merged-tags
                            (conj merged-tags new-tag))
                          (rest new-tags)))))
             (rest posts)))))

(defn blog-post-link [post]
  [:h3 [:a {:href (str "/" (:slug post) "/")} (:title post)]])

(defn absolutize-image-links [content]
  (clojure.string/replace content
                          #"img src=\"[^\"]*\""
                          #(str "img src=\"" site-url "images/" (subs % 9))))

(defn all-blog-posts-page [request]
  (apply (partial layout-page request [:h1 "All Blog Posts"])
         (mapv (fn [post]
                 [:div
                  [:h3 (blog-post-link post)]
                  [:p (date-string (:date post))]])
               (blog-posts))))

(defn tags-page [request]
  (apply (partial layout-page request [:h1 "Tags"])
         (mapv (fn [tag]
                 [:div [:h2 [:a {:href (str "/tags/" tag "/")} tag]]])
               (all-tags))))

(defn tag-pages []
  (into {}
        (mapv (fn [tag]
                [(str "/tags/" tag "/")
                 (fn [request]
                   (apply (partial layout-page request [:div [:h1 (str "Tag: " tag)]])
                          (mapv (fn [post]
                                  [:div
                                   [:h3 (blog-post-link post)]
                                   [:p (date-string (:date post))]])
                                (filter #(some #{tag} (:tags %))
                                        (blog-posts)))))])
              (all-tags))))

(defn blog-page [index]
  (let [posts (blog-posts)
        post (nth posts index)]
    (fn [request]
      (layout-page request
                   [:div [:h1 (:title post)]
                    [:h3 (date-string (:date post))]]
                   (concat [(absolutize-image-links (md/to-html (:content post)))]
                           [(vec
                             (butlast
                              (reduce into
                                      [:p [:b "Tags: "]]
                                      (mapv (fn [tag] [[:a {:href (str "/tags/" tag)} tag]
                                                       ", "])
                                            (:tags post)))))]
                           [[:div#post-links
                             [:div#previous-post-arrow
                              (when (> index 0)
                                [:h1 "«"])]
                             [:div#previous-post-link
                              (when (> index 0)
                                (blog-post-link (nth posts (dec index))))]
                             [:div#post-link-space]
                             [:div#next-post-link
                              (when (< index (dec (count posts)))
                                (blog-post-link (nth posts (inc index))))]
                             [:div#previous-post-arrow
                              (when (< index (dec (count posts)))
                                [:h1 "»"])]]])))))

(defn blog-pages []
  (into {}
        (mapv (fn [post index]
                [(str "/" (:slug post) "/")
                 (blog-page index)])
              (blog-posts)
              (range))))

(defn get-assets []
  (assets/load-assets "public" ["/styles/pure-min.css"
                                "/styles/all.css"
                                "/js/ui.js"
                                #"/images/.*\..*"]))

(defn raw-files [paths]
  (into {}
        (mapv (fn [path]
                [(str "/" path)
                 (slurp
                  (io/resource
                   (str "public/raw/" path)))])
              paths)))

(defn rss-feed []
  (apply (partial rss/channel-xml {:title "Ella Hoeppner's blog"
                                   :link site-url
                                   :description "Writings about epistemology, Artificial General Intelligence, game design."})
         (mapv (fn [post]
                 {:title (:title post)
                  :link (str site-url (:slug post))
                  :guid (str site-url (:slug post))
                  :description (absolutize-image-links (md/to-html (:content post)))
                  :pubDate (let [c (java.util.Calendar/getInstance)
                                 [year month day] (mapv #(Integer/parseInt %)
                                                        (string/split (:date post) #"-"))]
                             (.set c year (dec month) day 0 0 0)
                             (.getTime c))})
               (blog-posts))))

(defn get-pages []
  (stasis/merge-page-sources
   {:public
    {"/" (blog-page 0)
     "/blog/" all-blog-posts-page
     "/tags/" tags-page}
    :markdown (blog-pages)
    :tags (tag-pages)
    :rss
    {"/blog.rss" (rss-feed)}
    :broth (raw-files
            ["broth/broth.js"
             "broth/index.html"
             "broth/states/default.json"
             "broth/states/empty.json"
             "broth/states/lone_replicator.json"])}))

(def app
  (optimus/wrap (stasis/serve-pages get-pages)
                get-assets
                optimizations/all
                strategies/serve-live-assets))

(defn export []
  (stasis/empty-directory! output-dir)
  (stasis/export-pages (get-pages) output-dir))