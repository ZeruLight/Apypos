import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    uu_id: String,
    secret_id: String,
    login_id: String,
    user_id: String,
    game_id: String,
    tutorial_step: Number,
    character_name: String,
    current_session: String,
    tutorial_flags: [Number],
    model_info:{ face: Number, gender: Number, hair: Number, hair_color: Number, inner: Number, skin: Number }
});

const User = model('User', userSchema);
export default User;