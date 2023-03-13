# use-node

`useNode` React server hook

This is a hook working with [React Server Component (RSC)](https://beta.nextjs.org/docs/rendering/server-and-client-components#server-components) and [Next.js with App Router](https://beta.nextjs.org/docs/app-directory-roadmap).

## Getting Started

```bash
npm install use-node
```

or

```bash
yarn add use-node
```

or

```bash
pnpm add use-node
```

## Usage

```tsx
import { useNode } from "use-node";
import { ClientComponent } from "./ClientComponent";

export default async function App() {
  const process = await useNode("node:process");
  console.log("env", process.env.NODE_ENV); // server log

  // pass this to the Client Component
  return <ClientComponent data={process.env.NODE_ENV} />;
}
```

## Docs

### `useNode`

```ts
const data = await useNode(module: Modules)
```

#### Possible modules

```ts
type Modules =
  | "node:async_hooks"
  | "node:buffer"
  | "node:child_process"
  | "node:cluster"
  | "node:console"
  | "node:constants"
  | "node:dgram"
  | "node:diagnostics_channel"
  | "node:dns"
  | "node:dns/promises"
  | "node:fs"
  | "node:fs/promises"
  | "node:http"
  | "node:http2"
  | "node:https"
  | "node:inspector"
  | "node:net"
  | "node:os"
  | "node:path"
  | "node:perf_hooks"
  | "node:process"
  | "node:querystring"
  | "node:readline"
  | "node:readline/promises"
  | "node:repl"
  | "node:stream/promises"
  | "node:stream/consumers"
  | "node:stream/web"
  | "node:string_decoder"
  | "node:test"
  | "node:timers"
  | "node:timers/promises"
  | "node:tls"
  | "node:trace_events"
  | "node:tty"
  | "node:url"
  | "node:util"
  | "node:v8"
  | "node:vm"
  | "node:wasi"
  | "node:worker_threads"
  | "node:zlib";
```
