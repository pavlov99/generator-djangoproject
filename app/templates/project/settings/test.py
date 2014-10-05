""" Test settings.

Test settings configuration uses memory database and cache.

"""
from .project import *

ENVIRONMENT_NAME = "test"

# Databases
DATABASES['default']['ENGINE'] = 'django.db.backends.sqlite3'
DATABASES['default']['NAME'] = ':memory:'

# Caches
CACHES['default']['BACKEND'] = 'django.core.cache.backends.locmem.LocMemCache'
CACHES['default']['KEY_PREFIX'] = '_'.join((PROJECT_NAME, ENVIRONMENT_NAME))

# Service layers test config
# Disable south migrations on db creation in tests
SOUTH_TESTS_MIGRATE = False

# CELERY
BROKER_BACKEND = 'memory'
CELERY_ALWAYS_EAGER = True

logging.info('Test settings loaded.')
