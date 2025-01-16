## FlipDown

A lightweight and performant flip styled countdown clock.

  ![Showcase](./docs/Showcase.png)

## Properties

| Name           | Type    | Required | Default | Description                                                                                                   |
|----------------|---------|----------|---------|---------------------------------------------------------------------------------------------------------------|
| showLabels     | boolean | no       | true    | Set it to false if you don't want to show the labels.                                                         |
| showSeparators | boolean | no       | true    | Set it to false if you don't want to show the separators (colon) between time unit.                           |
| labels         | Object  | no       | true    | Custom object with the labels used to represent information for each section (days, hours, minutes, seconds). |


### Use of label properties

```typescript jsx
import React, {useMemo} from 'react'
import {Flipdown} from "react-flipdown";

// Unix timestamp (in seconds) to count down to
const twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

function App() {
    const labels = useMemo(() => ({
        days: 'Días',
        hours: 'Horas',
        minutes: 'Minutos',
        seconds: 'Segundos',
    }), [])
    
    return (
        <Flipdown
            epoch={twoDaysFromNow}
            labels={labels}
        />
    )
}
```

###### Mock Design and Code Original by [Peter Butcher](https://github.com/PButcher/flipdown)
