/**
 * This program prompts the user for their name, displays it, and then closes with a message.
 * 
 * The program will:
 * - Display the message "Welcome to Holberton School, what is your name?" followed by a new line.
 * - Allow the user to input their name on a new line.
 * - Display "Your name is: INPUT" where INPUT is the name entered by the user.
 * - When the user ends the program, it will display "This important software is now closing" followed by a new line.
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
    process.stdout.write('This important software is now closing\n');
    process.exit();
});
