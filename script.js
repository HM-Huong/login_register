window.addEventListener("load", () => {
	const wrapper = document.querySelector(".wrapper");
	let focusedInput;
	const btnLogin = document.querySelector(".btn-login");
	const closeWrapper = document.querySelector(".wrapper .icon-close");
	closeWrapper.addEventListener("click", ()=> {
		wrapper.classList.remove("popup");

	})
	btnLogin.addEventListener("click", () => {
		wrapper.classList.add("popup");
	});

	document.body.addEventListener("click", handleClick);

	function handleClick(e) {
		focusedInput?.removeEventListener("input", handleInputTextBox);
		if (e.target.matches(".text-box input")) {
			focusedInput = e.target;
			focusedInput.addEventListener("input", handleInputTextBox);
			return;
		}

		//
		if (e.target.matches(".form-box .register-link")) {
			wrapper.classList.add("isRegister");
			return;
		}
		if (e.target.matches(".form-box .login-link")) {
			wrapper.classList.remove("isRegister");
			return;
		}
	}

	function handleInputTextBox(e) {
		if (e.target.value !== "") {
			focusedInput.parentNode.classList.add("isFilled");
		} else {
			focusedInput.parentNode.classList.remove("isFilled");
		}
	}
});
