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

type ModuleToType<T extends Modules> = T extends "node:async_hooks"
  ? typeof import("node:async_hooks")
  : T extends "node:buffer"
  ? typeof import("node:buffer")
  : T extends "node:child_process"
  ? typeof import("node:child_process")
  : T extends "node:cluster"
  ? typeof import("node:cluster")
  : T extends "node:console"
  ? typeof import("node:console")
  : T extends "node:constants"
  ? typeof import("node:constants")
  : T extends "node:dgram"
  ? typeof import("node:dgram")
  : T extends "node:diagnostics_channel"
  ? typeof import("node:diagnostics_channel")
  : T extends "node:dns"
  ? typeof import("node:dns")
  : T extends "node:dns/promises"
  ? typeof import("node:dns/promises")
  : T extends "node:fs"
  ? typeof import("node:fs")
  : T extends "node:fs/promises"
  ? typeof import("node:fs/promises")
  : T extends "node:http"
  ? typeof import("node:http")
  : T extends "node:http2"
  ? typeof import("node:http2")
  : T extends "node:https"
  ? typeof import("node:https")
  : T extends "node:inspector"
  ? typeof import("node:inspector")
  : T extends "node:net"
  ? typeof import("node:net")
  : T extends "node:os"
  ? typeof import("node:os")
  : T extends "node:path"
  ? typeof import("node:path")
  : T extends "node:perf_hooks"
  ? typeof import("node:perf_hooks")
  : T extends "node:process"
  ? typeof import("node:process")
  : T extends "node:querystring"
  ? typeof import("node:querystring")
  : T extends "node:readline"
  ? typeof import("node:readline")
  : T extends "node:readline/promises"
  ? typeof import("node:readline/promises")
  : T extends "node:repl"
  ? typeof import("node:repl")
  : T extends "node:stream/promises"
  ? typeof import("node:stream/promises")
  : T extends "node:stream/consumers"
  ? typeof import("node:stream/consumers")
  : T extends "node:stream/web"
  ? typeof import("node:stream/web")
  : T extends "node:string_decoder"
  ? typeof import("node:string_decoder")
  : T extends "node:test"
  ? typeof import("node:test")
  : T extends "node:timers"
  ? typeof import("node:timers")
  : T extends "node:timers/promises"
  ? typeof import("node:timers/promises")
  : T extends "node:tls"
  ? typeof import("node:tls")
  : T extends "node:trace_events"
  ? typeof import("node:trace_events")
  : T extends "node:tty"
  ? typeof import("node:tty")
  : T extends "node:url"
  ? typeof import("node:url")
  : T extends "node:util"
  ? typeof import("node:util")
  : T extends "node:v8"
  ? typeof import("node:v8")
  : T extends "node:vm"
  ? typeof import("node:vm")
  : T extends "node:wasi"
  ? typeof import("node:wasi")
  : T extends "node:worker_threads"
  ? typeof import("node:worker_threads")
  : T extends "node:zlib"
  ? typeof import("node:zlib")
  : never;

const moduleMap: Record<Modules, () => Promise<ModuleToType<Modules>>> = {
  "node:async_hooks": () => import("node:async_hooks"),
  "node:buffer": () => import("node:buffer"),
  "node:child_process": () => import("node:child_process"),
  "node:cluster": () => import("node:cluster"),
  "node:console": () => import("node:console"),
  "node:constants": () => import("node:constants"),
  "node:dgram": () => import("node:dgram"),
  "node:diagnostics_channel": () => import("node:diagnostics_channel"),
  "node:dns": () => import("node:dns"),
  "node:dns/promises": () => import("node:dns/promises"),
  "node:fs": () => import("node:fs"),
  "node:fs/promises": () => import("node:fs/promises"),
  "node:http": () => import("node:http"),
  "node:http2": () => import("node:http2"),
  "node:https": () => import("node:https"),
  "node:inspector": () => import("node:inspector"),
  "node:net": () => import("node:net"),
  "node:os": () => import("node:os"),
  "node:path": () => import("node:path"),
  "node:perf_hooks": () => import("node:perf_hooks"),
  "node:process": () => import("node:process"),
  "node:querystring": () => import("node:querystring"),
  "node:readline": () => import("node:readline"),
  "node:readline/promises": () => import("node:readline/promises"),
  "node:repl": () => import("node:repl"),
  "node:stream/promises": () => import("node:stream/promises"),
  "node:stream/consumers": () => import("node:stream/consumers"),
  "node:stream/web": () => import("node:stream/web"),
  "node:string_decoder": () => import("node:string_decoder"),
  "node:test": () => import("node:test"),
  "node:timers": () => import("node:timers"),
  "node:timers/promises": () => import("node:timers/promises"),
  "node:tls": () => import("node:tls"),
  "node:trace_events": () => import("node:trace_events"),
  "node:tty": () => import("node:tty"),
  "node:url": () => import("node:url"),
  "node:util": () => import("node:util"),
  "node:v8": () => import("node:v8"),
  "node:vm": () => import("node:vm"),
  "node:wasi": () => import("node:wasi"),
  "node:worker_threads": () => import("node:worker_threads"),
  "node:zlib": () => import("node:zlib"),
};

export const useNode = async <T extends Modules>(
  module: T
): Promise<ModuleToType<T>> => {
  const moduleImport = moduleMap[module];
  if (!moduleImport) {
    throw new Error(`Unsupported module: ${module}`);
  }
  return moduleImport() as unknown as Promise<ModuleToType<T>>;
};
