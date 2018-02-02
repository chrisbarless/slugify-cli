#!/usr/bin/env node
const slugify = require('slugify');
const cli = require('cli');

cli.withStdinLines(function(lines, newline) {
  this.output(
    lines
      .map(line => line.toLowerCase())
      .map(slugify)
      .join(newline)
  );
});
