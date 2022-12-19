from flask_frozen import Freezer
from cv import app
from pathlib import Path

freezer = Freezer(app)

@freezer.register_generator
def page_generator():
    """
    Frozen-Flask doesn't know what to generate when a route contains a
    variable. This function resolves this, refer to Frozen-Flask's
    documentation for more information.
    """
    for template_path in app.jinja_env.list_templates():
        try:
            page = Path(template_path).relative_to("content").stem
            yield 'pages', {'page': page}
        except ValueError:
            pass

if __name__ == '__main__':
    freezer.freeze()