Flight-status pill — the core vocabulary of the Packed journey feed. Each status maps to a semantic colour + dot.

```jsx
<StatusPill status="ontime" />
<StatusPill status="delayed" label="Delayed 40m" />
<StatusPill status="boarding" pulse />
```

Statuses: `ontime | boarding | delayed | cancelled | landed`. Set `pulse` for live flights.
