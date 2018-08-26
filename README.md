# Vue in Depth

```sh
# Install CLI Tools
yarn global add @vue/cli
yarn global add @vue/cli-service-global

# Single File Rapid Prototyping
echo "<template><h1>Hello</h1></template>" > App.vue
vue serve App.vue -o -c # open browser, copy URL
vue build App.vue -t <targ> -n <name> -d <dest>
# Bootstrap a project
vue create app-name
cd app-name; 
yarn start
yarn run build
yarn run lint

Note: defaults saved in ~/.vuerc
```