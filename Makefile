DIST_NAME = method

SCRIPT_FILES = \
	src/index.ts

all: build lint test coverage esdoc

build: dist/$(DIST_NAME).js dist/$(DIST_NAME).d.ts
.PHONY: build

demo: dist/$(DIST_NAME).js dist/$(DIST_NAME).d.ts
	npm run demo
.PHONY: demo

check:
	npm run test
.PHONY: check

dist/$(DIST_NAME).d.ts: dist/src/index.d.ts
	mv $^ $@

dist/src/index.d.ts: dist/$(DIST_NAME).js

test: check
.PHONY: test

coverage:
	npm run coverage
.PHONY: coverage

prettier:
	npx prettier --write src test demo
.PHONY: prettier

lint:
	npx eslint --fix $(SCRIPT_FILES)
.PHONY: lint

esdoc:
	npx esdoc
.PHONY: esdoc

doc: esdoc
.PHONY: doc

dist/$(DIST_NAME).js: $(SCRIPT_FILES)
	npm run build

clean:
	rm -rf dist .nyc_output
.PHONY: clean
