## Monorepo Structure

This package is part of a monorepo. All commands, such as building or installing dependencies,
should be executed from the root of the project to ensure proper functionality and
dependency management.

## Optimized Bundle Size

This library is specifically designed to generate code that is highly optimized to minimize the final
bundle size. Files with the `.stories.ts` extension, which are used exclusively by Storybook for
documentation and testing purposes, will be excluded from the final production bundle as they are
not required for the application's functionality.

## Props

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