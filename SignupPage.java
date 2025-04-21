import javax.swing.*;
import java.awt.*;

public class SignupPage {
    public static void main(String[] args) {
        // Frame setup
        JFrame frame = new JFrame("Signup");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500, 300);
        frame.setLayout(new BorderLayout());

        // Left panel (Teal color block)
        JPanel leftPanel = new JPanel();
        leftPanel.setBackground(new Color(0, 102, 102));
        leftPanel.setPreferredSize(new Dimension(200, 0));
        frame.add(leftPanel, BorderLayout.WEST);

        // Right panel (Form area)
        JPanel rightPanel = new JPanel();
        rightPanel.setLayout(null);
        rightPanel.setBackground(new Color(217, 217, 217));

        JLabel titleLabel = new JLabel("signup");
        titleLabel.setFont(new Font("Arial", Font.BOLD, 24));
        titleLabel.setBounds(130, 20, 100, 30);
        rightPanel.add(titleLabel);

        JLabel usernameLabel = new JLabel("username");
        usernameLabel.setBounds(50, 70, 100, 25);
        rightPanel.add(usernameLabel);

        JTextField usernameField = new JTextField();
        usernameField.setBounds(130, 70, 180, 25);
        rightPanel.add(usernameField);

        JLabel passwordLabel = new JLabel("password");
        passwordLabel.setBounds(50, 110, 100, 25);
        rightPanel.add(passwordLabel);

        JPasswordField passwordField = new JPasswordField();
        passwordField.setBounds(130, 110, 180, 25);
        rightPanel.add(passwordField);

        JLabel confirmPasswordLabel = new JLabel("confirm");
        confirmPasswordLabel.setBounds(50, 150, 100, 25);
        rightPanel.add(confirmPasswordLabel);

        JPasswordField confirmPasswordField = new JPasswordField();
        confirmPasswordField.setBounds(130, 150, 180, 25);
        rightPanel.add(confirmPasswordField);

        JButton signupButton = new JButton("create account");
        signupButton.setBounds(130, 190, 140, 30);
        signupButton.setBackground(new Color(0, 102, 102));
        signupButton.setForeground(Color.WHITE);
        rightPanel.add(signupButton);

        frame.add(rightPanel, BorderLayout.CENTER);

        frame.setLocationRelativeTo(null); // Center on screen
        frame.setVisible(true);
    }
}
