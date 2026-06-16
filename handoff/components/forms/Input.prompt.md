Text field with label, helper text, error state, and optional leading/trailing icons. Focus shows a warm brand ring.

```jsx
<Input label="Destination" placeholder="Where to?" iconLeft={<MapPinIcon/>} />
<Input label="Email" error="That doesn't look right" />
```

Sizes `sm | md | lg`. Pass `error` to turn the field red.
