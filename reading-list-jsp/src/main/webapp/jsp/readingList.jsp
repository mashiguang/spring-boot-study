<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>

<body>

    ${amazonId}
    <br>

    <c:forEach items="${books}" var="book" varStatus="status">
        ${status.index},
        ${book.title},
        ${book.author},
        ${book.isbn},
        ${book.description}<br>
    </c:forEach>

    <hr />

    <h3>add a book</h3>
    <form action="" method="post">
        <label>title:</label>
        <input type="text" name="title" />

        <label>author:</label>
        <input type="text" name="author" />

        <label>isbn:</label>
        <input type="text" name="isbn" />
        <br />

        <label>description:</label>
        <textarea name="description" id="" cols="80" rows="5"></textarea>
        <br />

        <input type="submit" />
    </form>
</body>

</html>