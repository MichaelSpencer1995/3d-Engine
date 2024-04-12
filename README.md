# 3D Engine #

3D Rendering Software I am developing with Typescript to run in the browser, for learning and for fun!


## Usage ##

Import the UMD build:

```html
<script type="text/javascript" src="https://unpkg.com/3d-engine"></script>
```

The only required parameter to be passed into the engine is a element selector string, which is the injection site for the engine.


```html
<div id="root"></div>

<script>
    const settings = {
        background: '#000',
        windowSize: 180,
        entities: [
            {
                type: 'square',
                id: '001',
                width: 30,
                center: [(180 / 2), (180 / 2)]
            }
        ]
    }

    const app = new _3dEngine('#root', settings)
    app.launch()
</script>
```

## Settings ##

The second settings object parameter is optional and here are the current settings available.

| `Setting` | Value
| --- | ---
| background | CSS String for the color of the background
| windowSize | Size the engine
| entities | An array of objects, each object will be an entity to be rendered, as of now, the engine only supports 2D squares, pass in type "square", a unique id string, a width, and an array of 2 numbers to define the center of the entity, if no entities property is found on the settings a default square will be rendered.
