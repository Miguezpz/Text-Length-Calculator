const TEXT_BOX = document.querySelector('.text_box')
const BUTTON_CHECK_TEXT = document.querySelector('.button_check_text')
const SPAN_RESULT = document.querySelector('.span_result')

BUTTON_CHECK_TEXT.addEventListener('click', () => {
    const text_value = TEXT_BOX.value.trim()
    const text_length = text_value.length

    checkTextLength(text_length)
})

function checkTextLength(text_length) {
    SPAN_RESULT.textContent = '' 

    if (text_length <= 2000) {
        SPAN_RESULT.textContent = '✅ You can continue'
        SPAN_RESULT.style.color = 'green'
    } else {
        SPAN_RESULT.textContent = '❌ Try to split the text in smaller parts'
        SPAN_RESULT.style.color = 'red'
    }
}
