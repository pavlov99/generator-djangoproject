from .project import *

ENVIRONMENT_NAME = "dev"

INSTALLED_APPS += (
    'django_extensions',
    'debug_toolbar.apps.DebugToolbarConfig',
)


MIDDLEWARE_CLASSES += (
    'debug_toolbar.middleware.DebugToolbarMiddleware',
)

logging.info('Dev settings loaded.')
