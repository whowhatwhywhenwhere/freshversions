import * as semver from "https://deno.land/std/semver/mod.ts";

import versions from "https://raw.githubusercontent.com/denoland/fresh/main/versions.json" assert {
  type: "json",
};

const prereleases: string[] = [];
const releases: string[] = [];

versions.forEach((v) => {
  const version = semver.parse(v);
  if (version !== null) {
    if (version.prerelease.length > 0) {
      prereleases.push(v);
    } else {
      releases.push(v);
    }
  }
});

export const freshVersions = {
  versions,
  prerelease: {
    latest: prereleases[0],
    versions: prereleases,
  },
  release: {
    latest: releases[0],
    versions: releases,
  },
};

export default freshVersions;

if (import.meta.main) {
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
}
