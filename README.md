# use-node


https://user-images.githubusercontent.com/11172548/224843666-61eb2555-c6ba-4e9b-829e-5d8a31a54e12.mov


----
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
  | "node:repl"
  | "node:stream/promises"
  | "node:stream/web"
  | "node:string_decoder"
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

## Example
https://github.com/irekrog/rsc-server-data-example/blob/master/src/app/use-node/page.tsx

https://rsc-server-data-example.vercel.app/use-node
