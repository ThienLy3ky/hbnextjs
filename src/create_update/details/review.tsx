import { useState } from "react";

export default function Review() {
  const [rate, setRate] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  return (
    <>
      <h4 className="mb-4">Đánh Giá</h4>
      <div className="d-flex my-3">
        <p className="mb-0 mr-2">Đánh Giá * :</p>
        <div className="text-primary">
          {Array(5)
            .fill(1)
            .map((el, index) => {
              if (rate < index + 1 && rate > index)
                return (
                  <small
                    key={index}
                    className="fa-solid fa-star-half-alt text-primary mr-1"
                    onClick={() => setRate(index + 1)}
                  ></small>
                );
              if (rate < index + 1)
                return (
                  <small
                    key={index}
                    className="fa-solid fa-star text-primary mr-1"
                    onClick={() => setRate(index + 1)}
                  ></small>
                );
              return (
                <small
                  key={index}
                  className="fa-solid fa-star text-primary mr-1"
                  onClick={() => setRate(index + 1)}
                ></small>
              );
            })}
        </div>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="message">Nội dung *</label>
          <textarea
            id="message"
            cols={30}
            rows={5}
            className="form-control"
            value={comment}
            onChange={({ target }) => {
              target.value.length > 0 && target.value.length <= 180
                ? setComment(target.value)
                : {};
            }}
          ></textarea>
          <small>{comment.length}/180</small>
        </div>
        <div className="form-group mb-0">
          <input type="submit" value="Gửi" className="btn btn-primary px-3" />
        </div>
      </form>
    </>
  );
}
