import React from 'react';
import { useState } from 'react';
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input";

interface Comment {
  id: string;
  author: string;
  comment: string;
}
interface CommentsectionProps {
  postId: string;
}

const Commentsection = ({ postId }: CommentsectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        comment: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
      setAuthorName('');
    }
  };
  const handleEditComment = (commentID: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.comment);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentID);
    }
  };
  const handleSaveEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comments) =>
        comments.id === editingCommentId
          ? { ...comments, text: newComment, author: authorName }
          : comments);
      setComments(updatedComments);
      setNewComment('');
      setAuthorName('');
      setEditingCommentId(null);
    }
  };
  return (
    <div className='mt-8'>
      <h2 className='font-bold text-3xl underline-offset-1 '>Comments</h2>
      <div className='my-6 space-y-4'>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className='p-4'>
                <div className='font-semibold'>
                  {comment.author}
                </div>
                <p>{comment.comment}</p>
                <button onClick={() => handleEditComment(comment.id)} className='mt-6 text-white bg-blue-600 hover:bg-blue-500' >
                  Edit
                </button>
              </CardContent>
            </Card>

          ))
        ) : (
          <p className='text-slate-400 text-xl'>No Comments yet</p>
        )
        }

      </div>
      <div className='mt-6'>
        <Input
        type='text'
        value={authorName}
        onChange={(e)=> setAuthorName(e.target.value)}
        placeholder='Your Name'
        className="text-lg my-6 p-6 w-2/3 outline-none"
        />
        <textarea name="comment" id="comment" rows={5}
        typeof='text'
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder='Add a comment'
        className='text-xl my-6 p-6 w-2/3 outline-none border border-slate-200 rounded-md '
        ></textarea>
        <button onClick={editingCommentId ? handleSaveEditedComment : handleAddComment} className='mx-12 my-5 bg-blue-700 hover:bg-blue-500 w-1/3 text-lg text-white py-3'>
          {editingCommentId ? 'Save' : 'Submit'}
        </button>
      </div>
    </div>
  )
}

export default Commentsection