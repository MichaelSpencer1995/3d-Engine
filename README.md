# 3D Engine #

3D Rendering Software I am developing in Typescript to run in the browser, for learning and for fun!


## Browser Usage ##

Import the UMD build:

```html
<script type="text/javascript" src="https://unpkg.com/3d-engine"></script>
```

I will explain how the settings work later!


```html
<div id="root"></div>

<script>
    const settings = {
        background: "#999"
    }

    const app = new _3dEngine('#root', settings)
    app.launch()
</script>
```
