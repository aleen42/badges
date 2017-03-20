test:
	# ./node_modules/.bin/mocha --reporter nyan
	./node_modules/.bin/mocha ./tool/test/ --reporter spec

.PHONY: test