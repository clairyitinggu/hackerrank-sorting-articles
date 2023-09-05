import React from "react";

function Articles() {
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr data-testid="article" key="article-index">
            <td data-testid="article-title"></td>
            <td data-testid="article-upvotes"></td>
            <td data-testid="article-date"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
