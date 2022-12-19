from flask import Flask, render_template, send_file, redirect
app = Flask(__name__)
app.config['FREEZER_BASE_URL'] = 'https://farrellminette.github.io/resume/'
app.config['FREEZER_DESTINATION'] = 'public'

@app.route("/")
def index():
    rendered = render_template("index.html")
    print(rendered)
    return render_template("index.html")

@app.route("/downloadcv")
def downloadcv():
    return send_file("CV.pdf", as_attachment=True)

@app.route("/linkedin")
def linkedin():
    return redirect("https://www.linkedin.com/in/minette-farrell-490208245", code=302)

@app.route("/github")
def github():
    return redirect("https://github.com/FarrellMinette", code=302)

@app.route("/DataEngineering")
def dataeng():
    return redirect("https://www.ee.sun.ac.za/beng-electrical-and-electronic-data-engineering-specialisation/", code=302)

if __name__ == '__main__':
    app.run(debug = True, port=3000)