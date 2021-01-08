# [pypoe-json](https://pypoe-json.erosson.org)

An automatically-updated collection of all [Path of Exile](https://www.pathofexile.com) JSON data [PyPoE](https://github.com/OmegaK2/PyPoE) can export.

**If you're not a developer, [poedb will probably suit you better](https://poedb.tw/).**

View the JSON on GitHub at https://github.com/erosson/pypoe-json/tree/master/dist/dat

Browse the JSON online at https://pypoe-json.erosson.org

### Usage

* Download this repository (or `git clone`, `git submodule`, `git subtree`...)
* Import the json from `./dist/dat` into your own projects

### Why?

* When GGG patches the game, I usually forget to re-run PyPoE to update my tools. With pypoe-json, a bot runs it for me.
* Starting new projects using PoE's data is easier - just import this repository, no need to write a new PyPoE script
* It's much easier to browse/search/grep all of PoE's JSON when it's already exported
* I can't run PyPoE from my Linux machine

### How does this work?

Once a day, the buildbot checks to see if [PoE's Steam depot](https://steamdb.info/depot/238961/) has been updated. If it has, we download it, run PyPoE, and send the developer a pull request. Once the kinks are worked out, we'll start auto-merging the pull requests.

[PoE on steamdb](https://steamdb.info/app/238960/)

[The buildbot's configuration](https://github.com/erosson/pypoe-json/blob/master/.github/workflows/assets-export.yml)

### What about [RePoE](https://github.com/brather1ng/RePoE)?

RePoE is a similar project! It's been around much longer, and is very nice. pypoe-json aims for more complete, automatically updated data, with little to no preprocessing beyond what PyPoE gives us. Sometimes "less preprocessing" is less convenient to use; RePoE could be better for you.

### Some DAT files are missing.

PyPoE probably failed to export them. *shrug*

pypoe-json simply omits the failing files, rather than failing the entire build.

### Can I hotlink the json files at `erosson.github.io/pypoe-json`?

It costs me nothing so I won't stop you, but you really should host them yourself - I promise nothing about their future availability.
