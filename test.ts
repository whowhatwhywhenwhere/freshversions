import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import freshVersions from "./mod.ts";
import versions from "https://raw.githubusercontent.com/denoland/fresh/main/versions.json" assert {
  type: "json",
};

Deno.test({
  name: "mod.versions equals versions.json",
  fn: () => {
    assertEquals(freshVersions.versions, versions);
  },
});
