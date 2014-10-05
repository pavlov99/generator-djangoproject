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
