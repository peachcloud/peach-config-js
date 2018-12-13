# peach-config-js

load PeachCloud config

```shell
npm install --save peach-config
```

## usage

### `peachConfig = require('peach-config')`

configurable with:

- `PEACH_CONFIG`: path to configuration directory, defaults to `/etc/peach`
- `PEACH_STATE`: path to state directory, defaults to `/var/lib/peach`

### `ssbConfig = peachConfig.ssb()`

returns [ssb config](https://github.com/ssbc/ssb-config),

- loads config json from `${PEACH_CONFIG}/ssb/config.json`
- loads keys json from `${PEACH_STATE}/ssb/keys.json`
- sets `ssbConfig.path` to `${PEACH_STATE}/ssb`, which means
  - `${PEACH_STATE}/gossip.json` for gossip file
  - `${PEACH_STATE}/db` for legacy database (for invites)
  - `${PEACH_STATE}/flume` for flume database (for log and views)


## license

The Apache License

Copyright &copy; 2018 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
