# status-update

Turns issues into links in did output. Will be obsolete if [psss/did#164](https://github.com/psss/did/issues/164) is ever resolved.

## Pre-requisites

1. A working [did](https://github.com/psss/did) install
2. Slack set to [parse mark~~down~~up by default](https://slack.com/intl/en-gb/help/articles/360039953113-Set-your-message-formatting-preference)

## Usage

By default it will format the output of `did today`:

```console
$ status-update
Status Update:

* Pull requests created on github: 46
...
```

Any forward args will be passed to `did`:

```console
$ status-update year
Status Update:

* Pull requests created on github: loads
...
```

Copy/paste the output into your update channel and you are done!

### Showing full PR/Issue titles

If no `--width` argument is passed, `--width 5000` is used to show the whole title of issues and PRs

### But it uses issues for all the links

No worries - GitHub is kind enough to not use the same number ranges for issues and PRs so it will forward you to the right page.
