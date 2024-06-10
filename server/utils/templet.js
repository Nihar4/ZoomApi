export function generateZoomMeetingDetailsHTML(meetingId, meetingPassword, meetingTopic, startTime, joinUrl) {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Zoom Meeting Details</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                }
                .container {
                    max-width: 600px;
                    margin: auto;
                    background: #f9f9f9;
                    padding: 20px;
                    border-radius: 5px;
                }
                h1 {
                    text-align: center;
                    margin-bottom: 20px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    padding: 8px;
                    border-bottom: 1px solid #ddd;
                    text-align: left;
                }
                th {
                    background-color: #f2f2f2;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Zoom Meeting Details</h1>
                <table>
                    <tr>
                        <th>Meeting ID</th>
                        <td>${meetingId}</td>
                    </tr>
                    <tr>
                        <th>Meeting Password</th>
                        <td>${meetingPassword}</td>
                    </tr>
                    <tr>
                        <th>Meeting Topic</th>
                        <td>${meetingTopic}</td>
                    </tr>
                    <tr>
                        <th>Meeting Topic</th>
                        <td>${startTime}</td>
                    </tr>
                    <tr>
                        <th>Join URL</th>
                        <td><a href="${joinUrl}">Join Meeting</a></td>
                    </tr>
                </table>
            </div>
        </body>
        </html>
    `;

    return html;
}
