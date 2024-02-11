from flask import Flask, request
from transformers import AutoModelForCausalLM, AutoTokenizer, GenerationConfig
model = AutoModelForCausalLM.from_pretrained('roneneldan/TinyStories-33M')
tokenizer = AutoTokenizer.from_pretrained("EleutherAI/gpt-neo-125M")
app = Flask(__name__)
@app.route('/')
def predict():
    res = request.args.get('input')
    prompt = res
    input_ids = tokenizer.encode(prompt, return_tensors="pt")
    output = model.generate(input_ids, max_length = 1000, num_beams=1)
    output_text = tokenizer.decode(output[0], skip_special_tokens=True)
    resp = output_text[len(prompt):]
    print(resp)
    resp = resp.lower()
    score = 0
    if resp.find("good") != -1 :
        score += 30
    if resp.find("great") != -1:
        score += 30
    if resp.find("awesome") != -1:
        score += 20
    if resp.find("chihuo2104") != -1:
        score += 10
    if resp.find("nekovanilla") != -1:
        score += 5
    if resp.find("🐢") != -1:
        score += 5
    print(output_text, score)
    return str(score)

app.run(host='0.0.0.0', port=8388)
