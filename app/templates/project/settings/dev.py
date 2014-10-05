from .project import *

ENVIRONMENT_NAME = "dev"

INSTALLED_APPS += (
    'debug_toolbar.apps.DebugToolbarConfig',
)


MIDDLEWARE_CLASSES += (
    'debug_toolbar.middleware.DebugToolbarMiddleware',
)
