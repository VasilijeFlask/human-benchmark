export interface User {
    username: string;
    password: string;
    signupTime?: Date;
    highScores: {[game: string]: number}
}