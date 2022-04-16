#!/bin/bash

if grep -rnw -e 'eslint-disable-next-line no-console' -e 'eslint-disable no-console' --exclude-dir=node_modules --exclude-dir=scripts .; then
  echo 'ERROR: one or more "no-console" lines found' && exit 1
elif grep -rnw -e 'eslint-disable-next-line no-debugger' -e 'eslint-disable no-debugger' --exclude-dir=node_modules --exclude-dir=scripts .; then
  echo 'ERROR: one or more  "no-debugger" lines found' && exit 1
elif grep -rnw -e 'TODO: remove' --exclude-dir=node_modules --exclude-dir=scripts .; then
  echo 'ERROR: one or more  "TODO: remove" lines found' && exit 1
else
  echo 'No forbidden eslint-disable found' && exit 0
fi
