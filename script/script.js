$(function () {
    $('.choose-size').children().each((index, elem) => {
        $(elem).css({
            fontSize: $(elem).text()
        });
    });
    $('.choose-family').children().each((index, elem) => {
        $(elem).css({
            fontFamily: `${$(elem).text()}`
        });
    });
    let bold = false;
    $('.bold').click(() => {
        if (!bold) {
            $('.text').css({
                fontWeight: 'bold'
            });
            $('.bold').addClass('active');
            bold = true;
        }
        else {
            $('.text').css({
                fontWeight: 'normal'
            });
            $('.bold').removeClass('active');
            bold = false;
        }
    });
    let italic = false;
    $('.italic').click(() => {
        if (!italic) {
            $('.text').css({
                fontStyle: 'italic'
            });
            $('.italic').addClass('active');
            italic = true;
        }
        else {
            $('.text').css({
                fontStyle: 'normal'
            });
            $('.italic').removeClass('active');
            italic = false;
        }
    });
    let underline = false;
    let cross = false;
    let decoration = ''
    $('.underline').click(() => {
        if (!underline) {
            decoration += ' underline';
            $('.text').css({
                textDecoration: decoration
            });
            $('.underline').addClass('active');
            underline = true;
        }
        else {
            decoration = decoration.replace(/\s*underline\s*/, '');
            $('.text').css({
                textDecoration: decoration
            });
            $('.underline').removeClass('active');
            underline = false;
        }
    });
    $('.cross').click(() => {
        if (!cross) {
            decoration += ' line-through';
            $('.text').css({
                textDecoration: decoration
            });
            $('.cross').addClass('active');
            cross = true;
        }
        else {
            decoration = decoration.replace(/\s*line-through\s*/, '');
            $('.text').css({
                textDecoration: decoration
            });
            $('.cross').removeClass('active');
            cross = false;
        }
    });
    $('.align-left').click(() => {
        $('.text').css({
            alignItems: 'flex-start'
        });
        $('.align-left').addClass('active');
        $('.align-center').removeClass('active');
        $('.align-right').removeClass('active');
    });
    $('.align-center').click(() => {
        $('.text').css({
            alignItems: 'center'
        });
        $('.align-left').removeClass('active');
        $('.align-center').addClass('active');
        $('.align-right').removeClass('active');
    });
    $('.align-right').click(() => {
        $('.text').css({
            alignItems: 'flex-end'
        });
        $('.align-left').removeClass('active');
        $('.align-center').removeClass('active');
        $('.align-right').addClass('active');
    });
    $('.family').click(() => {
        $('.choose-size').addClass('hidden');
        $('.size').removeClass('active');
        $('.family').addClass('active');
        $('.choose-family').removeClass('hidden');
        $('.choose-family').children().each((index, elem) => {
            $(elem).click(() => {
                $('.text').css({
                    fontFamily: `${$(elem).text()}`
                });
                $('.choose-family div').removeClass('active');
                $(elem).addClass('active');
            })
        });
    });
    $('.choose-family').mouseleave(() => {
        $('.family').removeClass('active');
        $('.choose-family').addClass('hidden');
    });
    $('.size').click(() => {
        $('.choose-family').addClass('hidden');
        $('.family').removeClass('active');
        $('.size').addClass('active');
        $('.choose-size').removeClass('hidden');
        $('.choose-size').children().each((index, elem) => {
            $(elem).click(() => {
                $('.text').css({
                    fontSize: `${$(elem).text()}`
                });
                $('.choose-size div').removeClass('active');
                $(elem).addClass('active');
            })
        });
    });
    $('.choose-size').mouseleave(() => {
        $('.size').removeClass('active');
        $('.choose-size').addClass('hidden');
    });
    $('.close-btn').click(() => {
        $('.dialog').addClass('hidden');
    });

    let colors = ['#5199FF', '#0351C1', '#052555', '#242240', '#5BFF62', '#41B619', '#117243', '#117243', '#116315', '#FFD600', '#FFC11E', '#FBFF00', '#FF6B00', '#F6522E', '#E20338', '#FF0000', '#EF2FA2', '#940CFE', '#ffffff', '#939598', '#000000']
    let colorOptions = ``;
    for (let i = 0; i < colors.length; i++) {
        colorOptions += `<div class="color-div" style="background-color:${colors[i]}"></div>`;
    }
    $('.color-options').html(colorOptions);
    $('.color').click(() => {
        $('.dialog-color').removeClass('hidden');
    });
    $('.color-div').each((index, elem) => {
        $(elem).click(() => {
            $('.text').css({
                color: $(elem).css('backgroundColor')
            });
        });
    });
    $('.background').click(() => {
        $('.dialog-background').removeClass('hidden');
    });
    $('.bg-colors').click(() => {
        $('.background-options').children().removeClass('active');
        $('.bg-img-options, .bg-file-options').addClass('hidden');
        $('.bg-colors').addClass('active');
        $('.bg-color-options').removeClass('hidden');
    });
    $('.bg-imgs').click(() => {
        $('.background-options').children().removeClass('active');
        $('.bg-color-options, .bg-file-options').addClass('hidden');
        $('.bg-imgs').addClass('active');
        $('.bg-img-options').removeClass('hidden');
    });
    $('.bg-files').click(() => {
        $('.background-options').children().removeClass('active');
        $('.bg-img-options, .bg-color-options').addClass('hidden');
        $('.bg-files').addClass('active');
        $('.bg-file-options').removeClass('hidden');
    });
    let bgColorOptions = ``;
    for (let i = 0; i < colors.length; i++) {
        bgColorOptions += `<div class="bg-color-div" style="background-color:${colors[i]}"></div>`;
    }
    $('.bg-color-options').html(bgColorOptions);
    $('.bg-color-div').each((index, elem) => {
        $(elem).click(() => {
            $('.text').css({
                background: $(elem).css('backgroundColor')
            });
        });
    });
    let images = [];
    for (let i = 0; i < 9; i++) {
        images.push(`img${i + 1}-min.jpg`);
    };
    let imageOptions = ``;
    for (let i = 0; i < images.length; i++) {
        imageOptions += `<div style="background: url(images/${images[i]}); background-size:cover" class="img-div"></div>`;
    }
    $('.bg-img-options').html(imageOptions);
    $('.img-div').each((index, elem) => {
        $(elem).click(() => {
            $('.text').css({
                background: $(elem).css('background')
            });
        });
    });
    $('.file').change(function (event) {
        $('.text').css({
            background: `url(${URL.createObjectURL(event.target.files[0])})`,
            backgroundSize: `cover`
        });
    })
    let locked = true;
    $('.signIn').click(() => {
        if (locked) {
            $('.dialog-signIn').removeClass('hidden');
        }
        else {
            $('.dialog-signOut').removeClass('hidden');
        }
    })
    $('.signIn-block .close-btn').click(() => {
        $('.signIn-form')[0].reset();
        $('.login').removeClass('invalid');
        $('.password').removeClass('invalid');
    });
    $('.signIn-btn').click(() => {
        locked = false;
        if ($('.login').val() == 'Admin') {
            $('.login').removeClass('invalid');
        }
        else {
            locked = true;
            $('.login').addClass('invalid');
        };
        if ($('.password').val() == '1111') {
            $('.password').removeClass('invalid');
        }
        else {
            locked = true;
            $('.password').addClass('invalid');
        };
        if (!locked) {
            $('.dialog-signIn').addClass('hidden');
            $('.html').removeClass('disabled');
            $('.signIn-form')[0].reset();
            $('.signIn img').attr('src', 'icons/unlock.svg');
        }
    })
    $('.cancel-btn').click(() => {
        $('.dialog-signOut').addClass('hidden');
    });
    $('.signOut-btn').click(() => {
        $('.dialog-signOut').addClass('hidden');
        $('.signIn img').attr('src', 'icons/lock.svg');
        $('.html').addClass('disabled');
        locked = true;
    });
    $('.html').click(() => {
        if (!locked) {
            $('.text-area').eq(0).val($('.text').eq(0).html());
            $('.first-header').addClass('hidden');
            $('.text').addClass('hidden');
            $('.second-header').removeClass('hidden');
            $('.code').removeClass('hidden');
        };
    });
    $('.save').click(() => {
        $('.text').eq(0).html($('.text-area').eq(0).val());
        $('.second-header').addClass('hidden');
        $('.code').addClass('hidden');
        $('.first-header').removeClass('hidden');
        $('.text').removeClass('hidden');
    });
    $('.table').click(() => {
        $('.dialog-table').removeClass('hidden');
    })
    let input = /^\d+$/;
    let validTable = false;
    $('.create-table').click(() => {
        validTable= true;
        $('.table-form input[type=text]').each((index, elem) => {
            if (input.test($(elem).val()) && $(elem).val() != 0) {
                $(elem).removeClass('invalid');
            }
            else {
                $(elem).addClass('invalid');
                validTable = false;
            };
        });
        $('.table-form select').each((index, elem) => {
            if ($(elem).val()) {
                $(elem).removeClass('invalid');
            }
            else {
                $(elem).addClass('invalid');
                validTable = false;
            };
        });
        if (validTable) {
            const countTr = $('.count-tr').eq(0).val();
            const countTd = $('.count-td').eq(0).val();
            const widthTD = $('.width-td').eq(0).val();
            const heightTD = $('.height-td').eq(0).val();
            const borderWidth = $('.width-border').eq(0).val();
            const borderType = $('.style-border').eq(0).val();
            const borderColor = $('.color-border').eq(0).val();
            let table = `<table >`
            for (let i = 1; i <= countTr; i++) {
                table += `<tr>`;
                for (let j = 1; j <= countTd; j++) {
                    table += `<td style="width:${widthTD}px; height:${heightTD}px; border: ${borderWidth}px ${borderType} ${borderColor}">TD</td>`;
                }
                table += `</tr>`;
            }
            table += `</table>`;
            let value = $('.text-area').eq(0).val() + table;
            $('.text-area').eq(0).val(value);
        };
    });
    $('.reset-table').click(() => {
        $('.table-form *').removeClass('invalid');
        $('.table-form')[0].reset();
    });
    $('.table-block .close-btn').click(() => {
        $('.table-form *').removeClass('invalid');
        $('.table-form')[0].reset();
    });
    $('.ol').click(() => {
        $('.dialog-ol').removeClass('hidden');
    });
    let validOl = false;
    $('.create-ol').click(() => {
        validOl = true;
        if (input.test($('.count-ol').val()) && $('.count-ol').val() != 0) {
            $('.count-ol').removeClass('invalid');
        }
        else {
            $('.count-ol').addClass('invalid');
            validOl = false;
        };
        if ($('.ol-mark').val()) {
            $('.ol-mark').removeClass('invalid');
        }
        else {
            $('.ol-mark').addClass('invalid');
            validOl = false
        };
        if (validOl) {
            const countOl = $('.count-ol').val();
            const marks = $('.ol-mark').val();
            let list = `<ol type="${marks}">`;
            for (let i = 1; i <= countOl; i++) {
                list += `<li>item ${i}</li>`
            }
            list += `</ol>`;
            let value = $('.text-area').eq(0).val() + list;
            $('.text-area').val(value);
        };
    });
    $('.reset-ol').click(() => {
        $('.ol-form *').removeClass('invalid');
        $('.ol-form')[0].reset();
    });
    $('.ol-block .close-btn').click(() => {
        $('.ol-form *').removeClass('invalid');
        $('.ol-form')[0].reset();
    });
    $('.ul').click(() => {
        $('.dialog-ul').removeClass('hidden');
    });
    let validUl = false;
    $('.create-ul').click(() => {
        validUl = true;
        if (input.test($('.count-ul').val()) && $('.count-ul').val() != 0) {
            $('.count-ul').removeClass('invalid');
        }
        else {
            $('.count-ul').addClass('invalid');
            validUl = false;
        };
        if ($('.ul-mark').val()) {
            $('.ul-mark').removeClass('invalid');
        }
        else {
            $('.ul-mark').addClass('invalid');
            validUl = false;
        };
        if (validUl) {
            const countUl = $('.count-ul').val();
            const marks = $('.ul-mark').val();
            let list = `<ul type="${marks}">`;
            for (let i = 1; i <= countUl; i++) {
                list += `<li>item ${i}</li>`
            }
            list += `</ul>`;
            let value = $('.text-area').eq(0).val() + list;
            $('.text-area').val(value);
        };
    });
    $('.reset-ul').click(() => {
        $('.ul-form *').removeClass('invalid');
        $('.ul-form')[0].reset();
    });
    $('.ul-block .close-btn').click(() => {
        $('.ul-form *').removeClass('invalid');
        $('.ul-form')[0].reset();
    });
});