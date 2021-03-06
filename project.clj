(defproject blog "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [stasis "2.5.0"]
                 [ring "1.9.0"]
                 [hiccup "1.0.5"]
                 [me.raynes/cegdown "0.1.1"]
                 [optimus "0.20.2"]
                 [clj-commons/clj-yaml "0.7.0"]
                 [clj-rss "0.2.7"]]
  :ring {:handler blog.web/app}
  :profiles {:dev {:plugins [[lein-ring "0.12.5"]]}})
