import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Group,
  Text,
  Box,
} from "@mantine/core";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            lastName,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Ошибка при регистрации");
      }

      localStorage.setItem("access_token", data.token);
      console.log("Регистрация прошла успешно!");
      // window.location.href = "/dashboard";
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maw={400} mx="auto" mt="xl" component="form" onSubmit={handleSubmit}>
      <Stack spacing="md">
        <TextInput
          label="Почта"
          placeholder="Введите имя"
          value={firstName}
          type="email"
          onChange={(event) => setFirstName(event.currentTarget.value)}
          required
        />

        <TextInput
          label="Фамилия"
          placeholder="Введите фамилию"
          value={lastName}
          onChange={(event) => setLastName(event.currentTarget.value)}
          required
        />

        <PasswordInput
          label="Пароль"
          placeholder="Введите пароль"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          required
        />

        <PasswordInput
          label="Подтвердите пароль"
          placeholder="Повторите пароль"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.currentTarget.value)}
          required
        />

        {error && (
          <Text color="red" size="sm">
            {error}
          </Text>
        )}

        <Group position="center" mt="sm">
          <Button type="submit" loading={loading}>
            Зарегистрироваться
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}
