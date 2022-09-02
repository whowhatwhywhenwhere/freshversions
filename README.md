Fresh Versions

---

This is a small module that parses the Fresh
[versions.json](https://github.com/denoland/fresh/blob/main/versions.json) with
[SemVer](https://deno.land/std/semver) and returns an object containing arrays
of all versions, release versions, and prerelease versions.

```ts
import freshVersions from "./mod.ts";

const {
  versions,
  release,
  prerelease,
} = freshVersions;

const latestPrerelease = prerelease.latest;
const latestRelease = release.latest;

console.log(versions);
console.log(latestPrerelease);
console.log(latestRelease);
```

This module can be ran from the command line to get the full object with the
following command:

```bash
deno run ./mod.ts
```
