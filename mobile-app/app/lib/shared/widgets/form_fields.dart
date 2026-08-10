import 'package:flutter/material.dart';

class AuthTextField extends StatelessWidget {
  final String label;
  final TextEditingController controller;
  final String? errorText;
  final TextInputType? keyboardType;
  final ValueChanged<String>? onChanged;

  const AuthTextField({
    super.key,
    required this.label,
    required this.controller,
    this.errorText,
    this.keyboardType,
    this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: controller,
      keyboardType: keyboardType,
      onChanged: onChanged,
      decoration: InputDecoration(labelText: label, errorText: errorText),
    );
  }
}

class PasswordField extends StatefulWidget {
  final String label;
  final TextEditingController controller;
  final String? errorText;
  final String? helperText;
  final ValueChanged<String>? onChanged;

  const PasswordField({
    super.key,
    this.label = 'Password',
    required this.controller,
    this.errorText,
    this.helperText,
    this.onChanged,
  });

  @override
  State<PasswordField> createState() => _PasswordFieldState();
}

class _PasswordFieldState extends State<PasswordField> {
  bool _obscure = true;

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: widget.controller,
      obscureText: _obscure,
      onChanged: widget.onChanged,
      decoration: InputDecoration(
        labelText: widget.label,
        errorText: widget.errorText,
        helperText: widget.helperText,
        suffixIcon: IconButton(
          icon: Icon(_obscure ? Icons.visibility_outlined : Icons.visibility_off_outlined),
          onPressed: () => setState(() => _obscure = !_obscure),
        ),
      ),
    );
  }
}

class DatePickerField extends StatelessWidget {
  final String label;
  final DateTime? value;
  final bool allowUnknown;
  final bool unknown;
  final ValueChanged<DateTime?> onChanged;
  final ValueChanged<bool>? onUnknownChanged;

  const DatePickerField({
    super.key,
    required this.label,
    required this.value,
    required this.onChanged,
    this.allowUnknown = false,
    this.unknown = false,
    this.onUnknownChanged,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        InkWell(
          borderRadius: BorderRadius.circular(12),
          onTap: unknown
              ? null
              : () async {
                  final now = DateTime.now();
                  final picked = await showDatePicker(
                    context: context,
                    initialDate: value ?? now.add(const Duration(days: 180)),
                    firstDate: now,
                    lastDate: now.add(const Duration(days: 365 * 5)),
                  );
                  if (picked != null) onChanged(picked);
                },
          child: InputDecorator(
            decoration: InputDecoration(labelText: label),
            child: Text(
              unknown
                  ? 'Ainda não sei'
                  : value == null
                      ? 'Selecionar data'
                      : '${value!.day.toString().padLeft(2, '0')}/${value!.month.toString().padLeft(2, '0')}/${value!.year}',
            ),
          ),
        ),
        if (allowUnknown)
          CheckboxListTile(
            contentPadding: EdgeInsets.zero,
            controlAffinity: ListTileControlAffinity.leading,
            value: unknown,
            title: const Text('Ainda não sei'),
            onChanged: (v) => onUnknownChanged?.call(v ?? false),
          ),
      ],
    );
  }
}
