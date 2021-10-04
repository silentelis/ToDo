$(window).on("load", function () {});

$(document).ready(function () {
    //-----------------------------vars----------------------
    var addField = $('.add-field');
    var addBtn = $('.add');
    var id = null;
    var content = '';
    var dataArr = [];
    var check = false;
    var obj = {
        id: null,
        data: '',
        done: false
    };
    var itemContainer = $('.todo-item-wrap');

//-------------------------------init-----------------------------------------------
    dataArr = JSON.parse(localStorage.getItem("list"));
    if (!(dataArr === null)) {
        dataArr.forEach(function (el) {
            id = el.id;
            content = el.data;
            check = el.done;
            var item = '<div data-check="' + check + '" data-id="' + id + '" class="todo-item">\n' + '              <label>\n' + '                <input type="checkbox" name="check" class="check">\n' + ('                <input class="content" value="' + content + '" disabled>\n') + '              </label>\n' + '              <div class="todo-item-controls">\n' + '                <a class="update">\n' + '                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" role="img"\n' + '                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"\n' + '                       class="svg-inline--fa fa-pen fa-w-16 fa-3x pencil">\n' + '                    <path fill="currentColor"\n' + '                          d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"\n' + '                          class=""></path>\n' + '                  </svg>\n' + '                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img"\n' + '                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"\n' + '                       class="svg-inline--fa fa-check fa-w-16 fa-3x good">\n' + '                    <path fill="currentColor"\n' + '                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"\n' + '                          class=""></path>\n' + '                  </svg>\n' + '                </a>\n' + '                <a class="delete">\n' + '                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img"\n' + '                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"\n' + '                       class="svg-inline--fa fa-trash-alt fa-w-14 fa-3x">\n' + '                    <path fill="currentColor"\n' + '                          d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"\n' + '                          class=""></path>\n' + '                  </svg>\n' + '                </a>\n' + '              </div>\n' + '            </div>';
            itemContainer.append(item);
        });
        var listItems = itemContainer.find('.todo-item');
        listItems.each(function () {
            var data = $(this).attr('data-check');
            if (data === 'true') {
                $(this).addClass('done');
                $(this).find('.check').prop('checked', true);
            }
        });
    }

    //-------------------------------set item-------------------------------------------

    addBtn.on('click', function () {
        localStorage.clear();
        var newData = addField.val();
        if (!newData == '') {
            obj = {};
            obj.id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
            obj.data = newData;
            obj.done = false;
            if (dataArr === null) {
                dataArr = [];
            }
            dataArr.push(obj);
            console.log(dataArr);
            var list = JSON.stringify(dataArr);
            localStorage.setItem('list', list);
            id = obj.id;
            content = obj.data;
            var item = '<div data-check="false" data-id="' + id + '" class="todo-item">\n' + '              <label>\n' + '                <input type="checkbox" name="check" class="check">\n' + ('                <input class="content" value="' + content + '" disabled>\n') + '              </label>\n' + '              <div class="todo-item-controls">\n' + '                <a class="update">\n' + '                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" role="img"\n' + '                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"\n' + '                       class="svg-inline--fa fa-pen fa-w-16 fa-3x pencil">\n' + '                    <path fill="currentColor"\n' + '                          d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"\n' + '                          class=""></path>\n' + '                  </svg>\n' + '                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img"\n' + '                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"\n' + '                       class="svg-inline--fa fa-check fa-w-16 fa-3x good">\n' + '                    <path fill="currentColor"\n' + '                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"\n' + '                          class=""></path>\n' + '                  </svg>\n' + '                </a>\n' + '                <a class="delete">\n' + '                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img"\n' + '                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"\n' + '                       class="svg-inline--fa fa-trash-alt fa-w-14 fa-3x">\n' + '                    <path fill="currentColor"\n' + '                          d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"\n' + '                          class=""></path>\n' + '                  </svg>\n' + '                </a>\n' + '              </div>\n' + '            </div>';
            itemContainer.append(item);
        }
    });

    //---------------------------------delete item------------------------------------------------
    $(document).on('click', '.delete', function () {
        var id = $(this).parents('.todo-item').attr('data-id');
        $(this).parents('.todo-item').remove();
        localStorage.clear();
        var index = null;
        dataArr.forEach(function (el) {
            if (+id === el.id) {
                index = dataArr.indexOf(el);
            }
        });
        dataArr.splice(index, 1);
        var list = JSON.stringify(dataArr);
        localStorage.setItem('list', list);
    });

    //---------------------------------update item------------------------------------------------
    $(document).on('click', '.update', function () {
        $(this).parents('.todo-item').find('.content').prop('disabled', false);
        $(this).addClass('save');
    });
    $(document).on('click', '.save', function () {
        var id = $(this).parents('.todo-item').attr('data-id');
        var newData = $(this).parents('.todo-item').find('.content').val();
        localStorage.clear();
        dataArr.forEach(function (el) {
            if (+id === el.id) {
                el.data = newData;
            }
        });
        var list = JSON.stringify(dataArr);
        localStorage.setItem('list', list);
        $(this).parents('.todo-item').find('.content').prop('disabled', true);
        $(this).removeClass('save');
    });

    //------------------------------done------------------------------------------
    $(document).on('change', '.check', function () {
        var id = $(this).parents('.todo-item').attr('data-id');
        localStorage.clear();
        if ($(this).prop('checked') === true) {
            dataArr.forEach(function (el) {
                if (+id === el.id) {
                    el.done = true;
                }
            });
            console.log($(this));
            $(this).parents('.todo-item').addClass('done');
        } else {
            dataArr.forEach(function (el) {
                if (+id === el.id) {
                    el.done = false;
                }
            });
            console.log($(this));
            $(this).parents('.todo-item').removeClass('done');
        }
        var list = JSON.stringify(dataArr);
        localStorage.setItem('list', list);
    });
});

$(document).ready(function (){

//           for eye watcher
    $(".todo").mousemove(function(event) {
        var eye = $(".eye");
        var x = (eye.offset().left) + (eye.width() / 2);
        var y = (eye.offset().top) + (eye.height() / 2);
        var rad = Math.atan2(event.pageX - x, event.pageY - y);
        var rot = (rad * (180 / Math.PI) * -1) + 180;
        eye.css({
            '-webkit-transform': 'rotate(' + rot + 'deg)',
            '-moz-transform': 'rotate(' + rot + 'deg)',
            '-ms-transform': 'rotate(' + rot + 'deg)',
            'transform': 'rotate(' + rot + 'deg)'
        });
    });

})