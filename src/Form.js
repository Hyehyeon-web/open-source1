function Form(props) {

	let data = props.propsValue;
	return (
		<div className="mytbl">
			<div className="search">
				<input type="text" placeholder="제목 + 내용" id="search_area" />
				<input type="image" src="images/btn_search.gif" alt="검색" />
			</div>
			<table>
				<thead>
					<tr>
						<th scope="col" className="num">번호</th>
						<th scope="col" className="divide">구분</th>
						<th scope="col" className="title">제목</th>
						<th scope="col" className="date">등록일</th>
					</tr>
				</thead>
				<tbody>
					{
						data.map((d, i) => (
							<FormList key={i} propsValue={d} />
						))
					}
				</tbody>
			</table>
		</div>
	);
}

function FormList(props) {
	let { num, text, date } = props.propsValue;
	return (
		<tr>
			<td className="num">{num}</td>
			<td className="divide"><img src="images/news_notice_icon.gif" alt="icon" /></td>
			<td className="title"><a href="">{text}</a></td>
			<td className="date">{date}</td>
		</tr>
	)
}

export default Form;