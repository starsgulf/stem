//حفظ مو
$("#NewModel").on('click', '[data-save="modal"]', function (e) {
	var divNewModal = $("#NewModel");
	e.preventDefault();
	var this1 = $(this);
	var load = $(this1).find("span");
	load.css("display", "block");
	var form = $(this).parents('.divFormMode').find('form');
	var actionUrl = form.attr('action');
	var enct = $(form).attr("enctype");
	if (enct === "multipart/form-data") {
		var formN = document.querySelector(".formMode");
		var dataFor = new FormData(formN);
		var file = document.querySelector(".file");
		var img = $(file).files;
		dataFor.append("file", img);
		$.ajax({
			type: "POST",
			url: actionUrl,
			data: dataFor,
			async: false,
			cache: false,
			contentType: false,
			enctype: 'multipart/form-data',
			processData: false,
			success: function (data) {
				divNewModal.html("");
				divNewModal.html(data);
				divNewModal.find('.modal').modal('show');
				$("[id*=nameItem_]").autocomplete({ source: '/Member/autocompNameItem', minLength: 1 });
				$("[id*=nameCol_]").autocomplete({ source: '/Member/autocompNameCol', minLength: 1 });
				$("[id*=nameSiz_]").autocomplete({ source: '/Member/autocompNameSiz', minLength: 1 });
				$("[id*=UserName_]").autocomplete({ source: '/Member/autocompNameAcc', minLength: 1 });
				var massName = $(".alertMass");
				setInterval(function () {
					$(massName).hide();
				}, 5000)
			}
			, error: function (err) {
				alert(err);
			}
		});
	}
	else {
		var sendData = form.serialize();
		$.post(actionUrl, sendData).done(function (data) {
			divNewModal.html("");
			divNewModal.html(data);
			divNewModal.find('.modal').modal('show');
			$("[id*=nameItem_]").autocomplete({ source: '/Member/autocompNameItem', minLength: 1 });
			$("[id*=nameCol_]").autocomplete({ source: '/Member/autocompNameCol', minLength: 1 });
			$("[id*=nameSiz_]").autocomplete({ source: '/Member/autocompNameSiz', minLength: 1 });
			$("[id*=UserName_]").autocomplete({ source: '/Member/autocompNameAcc', minLength: 1 });
			$("[id*=UserNameEmp_]").autocomplete({ source: '/Member/autocompMan', minLength: 1 });
			var massName = $(".alertMass");
			setInterval(function () {
				$(massName).hide("slow");
			}, 5000)
		})
	}
});
//حفظ فاتورة جديدة
$("#NewModel").on('click', '[data-save="modalInvo"]', function (e) {
	var divNewModal = $("#NewModel");
	e.preventDefault();
	var this1 = $(this);
	var load = $(this1).find("span");
	load.css("display", "block");
	var form = $(this).parents('.divFormMode').find('form');
	var actionUrl = form.attr('action');
	var sendData = form.serialize();
	$.post(actionUrl, sendData).done(function (data) {
		divNewModal.html("");
		divNewModal.html(data);
		divNewModal.find('.modal').modal('show');
		var massName = $(".alertMass").html();
		var pos1 = massName.toString().substring(0, 4);
		if (pos1 == "true") {
			location.href = massName.substring(4, massName.length);
		} else {
			fnvNewInv.find('.modal').modal('show');
			$("#NameAcc").autocomplete({ source: '/Member/autocompCustomers', minLength: 1 });
			$("#NameAcc53").autocomplete({ source: '/Member/autocompCustomers', minLength: 1 });
			setInterval(function () {
				$(massName).hide();
			}, 5000)
		}

	})
})

//حفظ card
$("#formNewSales").on('click', '[data-save="modalCard"]', function (e) {
	var divNewCard = $("#formNewSales");
	e.preventDefault();
	var this1 = $(this);
	var load = $(this1).find("span");
	load.css("display", "block");
	var form = $(this).parents('.divFormMode').find('form');
	var actionUrl = form.attr('action');
	var enct = $(form).attr("enctype");
	if (enct === "multipart/form-data") {
		var formN = document.querySelector(".formMode");
		var dataFor = new FormData(formN);
		var file = document.querySelector(".file");
		var img = $(file).files;
		dataFor.append("file", img);
		$.ajax({
			type: "POST",
			url: actionUrl,
			data: dataFor,
			async: false,
			cache: false,
			contentType: false,
			enctype: 'multipart/form-data',
			processData: false,
			success: function (data) {
				divNewCard.html("");
				divNewCard.html(data);
				$("[id*=nameItem_]").autocomplete({ source: '/Member/autocompNameItem', minLength: 1 });
				$("[id*=nameCol_]").autocomplete({ source: '/Member/autocompNameCol', minLength: 1 });
				$("[id*=nameSiz_]").autocomplete({ source: '/Member/autocompNameSiz', minLength: 1 });
				$("[id*=UserName_]").autocomplete({ source: '/Member/autocompNameAcc', minLength: 1 });
				$("[id*=name_]").autocomplete({ source: '/Member/autocompNameAccDaily', minLength: 1 });
				var massName = $(".alertMass");
				setInterval(function () {
					$(massName).hide();
				}, 5000)
			}
			, error: function (err) {
				alert(err);
			}
		});
	}
	else {
		var sendData = form.serialize();
		$.post(actionUrl, sendData).done(function (data) {
			divNewCard.html("");
			divNewCard.html(data);
			$("[id*=nameItem_]").autocomplete({ source: '/Member/autocompNameItem', minLength: 1 });
			$("[id*=nameCol_]").autocomplete({ source: '/Member/autocompNameCol', minLength: 1 });
			$("[id*=nameSiz_]").autocomplete({ source: '/Member/autocompNameSiz', minLength: 1 });
			$("[id*=UserName_]").autocomplete({ source: '/Member/autocompNameAcc', minLength: 1 });
			$("[id*=name_]").autocomplete({ source: '/Member/autocompNameAccDaily', minLength: 1 });
			var massName = $(".alertMass");
			setInterval(function () {
				$(massName).hide("slow");
			}, 5000)
		})
	}
});
//اغلاق اضافة صنف جديد
function funCloseNewItem(th) {
	var r = $(".modal-backdrop.show");
	r.css("z-index", "-1");
	r.css("opacity", "0");
	$("#NewModel").html("");
}
//التعديل على الاسعار
function funEdit(th) {
	var this1 = $(th);
	var a = $(this1).attr('pid0');
	var b = $(this1).attr('pid1');
	var c = $(this1).attr('pid2');
	var d = $(this1).attr('pid3');
	var ur = $(this1).attr('pid4');
	var f = th.value;
	var g = $(this1).attr('pid5');
	if (f.length != 0) {
		var isLoaded = $(this1).attr('data-loaded');
		if (isLoaded == "false") {
			$(this1).addClass("loadingP");
			$(this1).attr('data-loaded', true);
			$.ajax({
				url: ur,
				type: "post",
				data: { a: a, b: b, c: c, d: d, f: f, g: g },
				success: function (d) {
					/*	oTable3.ajax.reload();	*/
					var pos1 = d.substring(0, 4);
					if (pos1 === "err_") {
						var pos2 = d.substring(4, d.length);
						alert(pos2);
					}
					$(this1).removeClass("loadingP");
					$(this1).attr('data-loaded', false);
				},
				error: function () {
					$(this1).removeClass("loadingP");
					$(this1).attr('data-loaded', false);
					alert("Error!");
				}
			});
		}
	}
}

