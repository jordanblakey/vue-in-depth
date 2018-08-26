# Vue in Depth

```sh
# Install CLI Tools
yarn global add @vue/cli
yarn global add @vue/cli-service-global
yarn global add @vue/cli-init

# Single File Rapid Prototyping
echo "<template><h1>Hello</h1></template>" > App.vue
vue serve App.vue -o -c # open browser, copy URL
vue build App.vue -t <targ> -n <name> -d <dest>

# Bootstrap a project
# vue create app-name # Default webpack config
vue init pwa pwa-test # PWA optimized build template
cd app-name; 
# yarn start # Default template
yarn run dev # PWA template
yarn run build
cd dist; python -m SimpleHTTPServer # Serve the dist folder on localhost:8000
yarn run lint

Note: defaults saved in ~/.vuerc
```