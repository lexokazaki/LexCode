// LexCodeParser.h
#ifndef LEXCODE_PARSER_H
#define LEXCODE_PARSER_H

#include <string>
#include <vector>
#include <map>

struct LexCode {
    std::string emotion;
    int intensity;
    char nuance;
    int expression;
    std::string symbolicGesture;
    std::string target;
    std::vector<std::string> modifiers;
};

LexCode parseLexCode(const std::string& code);

#endif
