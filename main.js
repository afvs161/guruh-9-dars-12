const input = document.querySelector("input")
const btns = document.querySelectorAll("button")

btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		if (e.target.textContent === "clear") {
			input.value = ""
		} else if (e.target.textContent === "<-") {
			input.value = input.value.slice(0, -1)
		} else if (e.target.textContent === "=") {
			input.value = eval(input.value).toFixed(2)
		} else {
			input.value += e.target.textContent
		}
	})
})
