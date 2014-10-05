""" Project settings."""
from .core import *

ENVIRONMENT_NAME = "project"

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': op.join(BASE_DIR, 'db.sqlite3'),
        'USER': '<%= projectName %>',
        'PASSWORD': '<%= projectName %>',
        'HOST': '127.0.0.1',
        'PORT': '',
    }
}

TEMPLATE_DIRS = (
    op.join(BASE_DIR, 'templates').replace('\\', '/'),
)

# Caches
CACHES['default']['KEY_PREFIX'] = '_'.join((PROJECT_NAME, ENVIRONMENT_NAME))

# set header for https nginx redirect
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTOCOL', 'https')

logging.info('Project settings loaded.')
