(defproject blog "0.1.0"
  :description "Code behind https://ellahoeppner.com"
  :url "https://github.com/EllaMHoeppner/ellahoeppner_com"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [stasis "2.5.0"]
                 [ring "1.9.0"]
                 [hiccup "1.0.5"]
                 [me.raynes/cegdown "0.1.1"]
                 [optimus "0.20.2"]
                 [clj-commons/clj-yaml "0.7.0"]
                 [clj-rss "0.2.7"]]
  :ring {:handler blog.web/app}
  :profiles {:dev {:plugins [[lein-ring "0.12.5"]]}}
  :aliases {"build-site" ["run" "-m" "blog.web/export"]})