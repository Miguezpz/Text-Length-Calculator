
function executeScript () {
    
    const TEXT_BOX = document.querySelector('.text_box')
    const BUTTON_CHECK_TEXT = document.querySelector('.button_check_text')
    const SPAN_RESULT = document.querySelector('.span_result')

    BUTTON_CHECK_TEXT.addEventListener('click', checkTextLength)

    window.addEventListener('keydown', (e) => {

        console.log(e)
        const text_value = TEXT_BOX.value.trim()
        const text_length = text_value.length

        if (e.key === 'Enter') {
            checkTextLength()

        } else if (e.key === 'Backspace' && text_length <= 1) {
            SPAN_RESULT.textContent = '' 
            SPAN_RESULT.style.display = 'none'
        }
    })

    window.addEventListener('click', (e) => {

        console.log(e)
        const text_value = TEXT_BOX.value.trim()
        const text_length = text_value.length

        if (text_length <= 1) {
            SPAN_RESULT.textContent = '' 
            SPAN_RESULT.style.display = 'none'
        }
    })

    function checkTextLength() {

        const text_value = TEXT_BOX.value.trim()
        const text_length = text_value.length

        if (text_length > 0) {

            SPAN_RESULT.textContent = '' 
            SPAN_RESULT.style.display = 'flex'

            if (text_length <= 2000) {
                SPAN_RESULT.textContent = `✅ Text good to go. The text is ${text_length} characters long.`
                SPAN_RESULT.style.color = 'green'
            } else if (text_length > 2000) {
                SPAN_RESULT.textContent = `❌ Make the text paragraph length shorter. The text is ${text_length} characters long.`

                SPAN_RESULT.style.color = 'red'
            } 
        }

        changeButtonStyle()
    }

    function changeButtonStyle () {

        BUTTON_CHECK_TEXT.classList.add('pressed')

        setTimeout(() => {
            BUTTON_CHECK_TEXT.classList.remove('pressed')
        }, 150)
    }
}



window.addEventListener('load', executeScript)