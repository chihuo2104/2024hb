from flask import Flask, request
from transformers import AutoModelForCausalLM, AutoTokenizer, GenerationConfig
model = AutoModelForCausalLM.from_pretrained('roneneldan/TinyStories-33M')
tokenizer = AutoTokenizer.from_pretrained("EleutherAI/gpt-neo-125M")
app = Flask(__name__)

@app.route('/')
def index():
    res = request.args.get('input')
    prompt = res
    input_ids = tokenizer.encode(prompt, return_tensors="pt")
    output = model.generate(input_ids, max_length = 1000, num_beams=1)
    output_text = tokenizer.decode(output[0], skip_special_tokens=True)
    return output_text[len(prompt):]

app.run(host='0.0.0.0', port=5000)