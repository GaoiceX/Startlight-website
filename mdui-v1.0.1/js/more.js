document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('contents').style.visibility = "hidden";
    } else if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('load').style.visibility = "hidden";
            document.getElementById('contents').style.visibility = "visible";
        }, 1000);
    }
}
function show1() {
    document.getElementById("gugu").style.display = "block";
    document.getElementById("gino").style.display = "none";
    document.getElementById("dlyro").style.display = "none";
    document.getElementById("lili").style.display = "none";
    document.getElementById("xa").style.display = "none";
    document.getElementById("kaer").style.display = "none";
}
function show2() {
    document.getElementById("gugu").style.display = "none";
    document.getElementById("gino").style.display = "block";
    document.getElementById("dlyro").style.display = "none";
    document.getElementById("lili").style.display = "none";
    document.getElementById("xa").style.display = "none";
    document.getElementById("kaer").style.display = "none";
}
function show3() {
    document.getElementById("gugu").style.display = "none";
    document.getElementById("gino").style.display = "none";
    document.getElementById("dlyro").style.display = "block";
    document.getElementById("lili").style.display = "none";
    document.getElementById("xa").style.display = "none";
    document.getElementById("kaer").style.display = "none";
}
function show4() {
    document.getElementById("gugu").style.display = "none";
    document.getElementById("gino").style.display = "none";
    document.getElementById("dlyro").style.display = "none";
    document.getElementById("lili").style.display = "block";
    document.getElementById("xa").style.display = "none";
    document.getElementById("kaer").style.display = "none";
}
function show5() {
    document.getElementById("gugu").style.display = "none";
    document.getElementById("gino").style.display = "none";
    document.getElementById("dlyro").style.display = "none";
    document.getElementById("lili").style.display = "none";
    document.getElementById("xa").style.display = "block";
    document.getElementById("kaer").style.display = "none";
}
function show6() {
    document.getElementById("gugu").style.display = "none";
    document.getElementById("gino").style.display = "none";
    document.getElementById("dlyro").style.display = "none";
    document.getElementById("lili").style.display = "none";
    document.getElementById("xa").style.display = "none";
    document.getElementById("kaer").style.display = "block";
}
function mbshow1() {
    document.getElementById("mbgugu").style.display = "block";
    document.getElementById("mbgino").style.display = "none";
    document.getElementById("mbdlyro").style.display = "none";
    document.getElementById("mblili").style.display = "none";
    document.getElementById("mbxa").style.display = "none";
    document.getElementById("mbkaer").style.display = "none";
}
function mbshow2() {
    document.getElementById("mbgugu").style.display = "none";
    document.getElementById("mbgino").style.display = "block";
    document.getElementById("mbdlyro").style.display = "none";
    document.getElementById("mblili").style.display = "none";
    document.getElementById("mbxa").style.display = "none";
    document.getElementById("mbkaer").style.display = "none";
}
function mbshow3() {
    document.getElementById("mbgugu").style.display = "none";
    document.getElementById("mbgino").style.display = "none";
    document.getElementById("mbdlyro").style.display = "block";
    document.getElementById("mblili").style.display = "none";
    document.getElementById("mbxa").style.display = "none";
    document.getElementById("mbkaer").style.display = "none";
}
function mbshow4() {
    document.getElementById("mbgugu").style.display = "none";
    document.getElementById("mbgino").style.display = "none";
    document.getElementById("mbdlyro").style.display = "none";
    document.getElementById("mblili").style.display = "block";
    document.getElementById("mbxa").style.display = "none";
    document.getElementById("mbkaer").style.display = "none";
}
function mbshow5() {
    document.getElementById("mbgugu").style.display = "none";
    document.getElementById("mbgino").style.display = "none";
    document.getElementById("mbdlyro").style.display = "none";
    document.getElementById("mblili").style.display = "none";
    document.getElementById("mbxa").style.display = "block";
    document.getElementById("mbkaer").style.display = "none";
}
function mbshow6() {
    document.getElementById("mbgugu").style.display = "none";
    document.getElementById("mbgino").style.display = "none";
    document.getElementById("mbdlyro").style.display = "none";
    document.getElementById("mblili").style.display = "none";
    document.getElementById("mbxa").style.display = "none";
    document.getElementById("mbkaer").style.display = "block";
}

(function () {
    window.TypechoComment = {
        dom: function (id) {
            return document.getElementById(id);
        },

        create: function (tag, attr) {
            var el = document.createElement(tag);

            for (var key in attr) {
                el.setAttribute(key, attr[key]);
            }

            return el;
        },

        reply: function (cid, coid) {
            var comment = this.dom(cid), parent = comment.parentNode,
                response = this.dom('respond-page-56'), input = this.dom('comment-parent'),
                form = 'form' == response.tagName ? response : response.getElementsByTagName('form')[0],
                textarea = response.getElementsByTagName('textarea')[0];

            if (null == input) {
                input = this.create('input', {
                    'type': 'hidden',
                    'name': 'parent',
                    'id': 'comment-parent'
                });

                form.appendChild(input);
            }

            input.setAttribute('value', coid);

            if (null == this.dom('comment-form-place-holder')) {
                var holder = this.create('div', {
                    'id': 'comment-form-place-holder'
                });

                response.parentNode.insertBefore(holder, response);
            }

            comment.appendChild(response);
            this.dom('cancel-comment-reply-link').style.display = '';

            if (null != textarea && 'text' == textarea.name) {
                textarea.focus();
            }

            return false;
        },

        cancelReply: function () {
            var response = this.dom('respond-page-56'),
                holder = this.dom('comment-form-place-holder'), input = this.dom('comment-parent');

            if (null != input) {
                input.parentNode.removeChild(input);
            }

            if (null == holder) {
                return true;
            }

            this.dom('cancel-comment-reply-link').style.display = 'none';
            holder.parentNode.insertBefore(response, holder);
            return false;
        }
    };
})();
