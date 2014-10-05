ENV=$(CURDIR)/.env
BIN=$(ENV)/bin
PYTHON=$(shell which python)
MANAGER=$(PYTHON) $(CURDIR)/manage.py

MODULE=<%= projectName %>
PORT=8000

DJANGO_SETTINGS=$(MODULE).settings.dev
DJANGO_SETTINGS_PATH=$(CURDIR)/$(shell echo $(DJANGO_SETTINGS) | tr "." "/").py

.PHONY: help
# target: help - Display callable targets
help:
	@egrep "^# target:" Makefile | sed -e 's/^# target: //g'

.PHONY: clean
# target: clean - Clean temporary files
clean:
	@find . -name "*.py[co]" -delete
	@find . -name "*.orig" -delete
	@find backend -name "__pycache__" -delete

.PHONY: run
# target: run - Run Django devserver
run: static
	$(MANAGER) runserver_plus --settings=$(DJANGO_SETTINGS) 0.0.0.0:$(PORT)

.PHONY: shell
# target: shell - Run Django debug shell
shell:
	$(MANAGER) shell_plus --settings=$(DJANGO_SETTINGS)

.PHONY: static
# target: static - Build and collect static
static:
	$(MANAGER) collectstatic --settings=$(DJANGO_SETTINGS) --noinput --clear

.PHONY: db
# target: db - Update database scheme
db:
	$(MANAGER) syncdb --noinput --settings=$(DJANGO_SETTINGS)
	$(MANAGER) migrate --noinput --delete-ghost-migrations --settings=$(DJANGO_SETTINGS)
